import Header from "@/components/header"
import Layout from "@/components/layout"
import Sidebar from "@/components/sidebar"
import Mal from "@/lib/mal"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryCode = searchParams.get("code")
  console.log(queryCode)
  const contentType = "application/json"

  useEffect(() => {
    // Store code to DB
    updateUserCodeAndToken()
  }, [])

  const updateUserCodeAndToken = async () => {
    // Get MAL client ID
    const res = await fetch("/api/mal/clientid")
    if (res.ok) {
      const resp = await res.json()
      if (resp && resp.data && resp.data.clientId) {
        const clientID = resp.data.clientId

        // Fetch user data
        const session = await getSession()

        const userResponse = await fetch("/api/user/" + session.user.username)

        const userRes = await userResponse.json()
        const currentUserData = userRes.userData

        console.log(currentUserData)

        // Create MAL service object
        const mal = new Mal(clientID)
        if (queryCode && currentUserData) {
          const response = await mal.generateAccessToken(
            queryCode,
            currentUserData.codeChallenge
          )

          console.log(response)

          if (response) {
            // Create user data to be updated
            const updateUserData = {
              username: session.user.username,
              code: queryCode,
              tokenType: response.token_type,
              refreshToken: response.refresh_token,
              expiryTime: response.expires_in,
              accessToken: response.access_token,
            }

            // Update user data
            const updateResponse = await fetch("/api/user/update", {
              method: "PUT",
              headers: {
                Accept: contentType,
                "Content-Type": contentType,
              },
              body: JSON.stringify(updateUserData),
            })

            if (updateResponse.ok) {
              //     console.log(await updateResponse.json().body)
              router.replace("/")
            }
          }
        }
      }
    }
  }

  return (
    <>
      <Layout titleName="Paisen" />
      <Header />
      <Sidebar currentPage="home" />
      <main id="main" className="main">
        Loading...
      </main>
    </>
  )
}