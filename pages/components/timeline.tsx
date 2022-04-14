import Link from "next/link";

interface TimeLineProps {
  title: string;
  id: number;
  content: string;
  userId: string;
  comment: string;
  hearts: number;
  status: string;
}

export default function TimeLine({
  title,
  content,
  userId,
  comment,
  hearts,
  id,
  status,
}: TimeLineProps) {
  return (
    <Link href={{ pathname: `/timelines/${id}`, query: { status: status } }}>
      <a className="flex cursor-pointer justify-between px-4 pt-5">
        <div className="flex space-x-4">
          <div className="mt-2 h-14 w-14 rounded-full bg-gray-400" />
          <div className="flex flex-col pt-2">
            <div className="flex pt-2">
              <h3 className="text-s font-medium text-gray-900">{title}</h3>
              <span className="ml-1 mt-1 text-sm text-gray-400">{userId}</span>
            </div>
            <div className="flex pt-1">
              <span className="font-medium text-gray-900">{content}</span>
              <span className="ml-1 mt-1 text-sm text-gray-400">{comment}</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end space-x-2"></div>
      </a>
    </Link>
  );
}
