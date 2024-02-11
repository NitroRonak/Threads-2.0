import PostThread from "@/Components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import {redirect} from "next/navigation"
const page =async () => {
    const user =await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    if(!userInfo?.onboarded) {
      redirect("/onboarding")
    }

  return (
    <>
      <h1 className="head-text mb-10">Create Thread</h1>
      <PostThread userId={userInfo._id}/>
    </>
  )
}

export default page
