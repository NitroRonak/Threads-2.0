import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect("/onboarding");

  //getActivity
  const activity = await getActivity(userInfo._id);
  return (
    <section>
      <h1 className="text-heading2-bold text-light-1 mb-10 ">Activity</h1>

      <section className="mt-10 flex flex-col gap-5">
        {activity.length > 0 ? (
          <>
            {activity.map((activity) => (
                <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                  <article className="flex items-center gap-2 rounded-md bg-dark-2 px-7 py-4">
                    <Image
                      src={activity.author.image}
                      alt="Profile Picture"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />

                    <p className="!text-small-regular text-light-1">
                      <span className="mr-1 text-blue font-bold">
                        {activity.author.name}
                      </span>
                      <span> replied to your thread</span>
                    </p>
                  </article>
                </Link>
            ))}
          </>
        ):(
          <p className="!text-base-regular text-light-3">No activity</p>
        )}
      </section>
    </section>
  );
};

export default Page;
