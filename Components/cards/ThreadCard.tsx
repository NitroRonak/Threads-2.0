import Link from "next/link";
import Image from "next/image";
import HeartIcon from "@/public/assets/heart-gray.svg";
import ReplyIcon from "@/public/assets/reply.svg";
import RepostIcon from "@/public/assets/repost.svg";
import ShareIcon from "@/public/assets/share.svg";
interface Props {
  id: string;
  currentUserId: string | null;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}
const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment
}: Props) => {
  return (
    <article className={`flex flex-col w-full rounded-xl ${isComment ? "px-0 xs:px-7":"bg-dark-2 p-7"}`}>
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt={author.name}
                className="cursor-pointer rounded-full"
                fill
              />
            </Link>

            <div className="relative mt-2 w-0.5 grow rounded-full bg-neutral-800"></div>
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">{content}</p>

            <div className={`${isComment && 'mb-10'} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-3.5">
                <Image src={HeartIcon} alt="heart" height={24} width={24} className="cursor-pointer object-contain"/>
               
                <Link href={`/thread/${id}`}>
                  <Image
                    src={ReplyIcon}
                    alt="reply"
                    height={24}
                    width={24}
                    className="object-contain"
                  />
                </Link>

                <Image src={RepostIcon} alt="repost" height={24} width={24} className="cursor-pointer object-contain"/>
                <Image src={ShareIcon} alt="share" height={24} width={24} className="cursor-pointer object-contain"/>
              </div>

              {isComment && comments.length > 0 && (
                  <Link href={`/thread/${id}`}>
                    <p className="mt-1 text-subtle-medium text-gray-1">
                      {comments.length} replies
                    </p>
                  </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;
