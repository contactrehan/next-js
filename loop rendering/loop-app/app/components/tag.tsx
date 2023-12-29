import { TagType } from "@/types/componentTypes";

export default function Tag(prop:TagType)
{
    return (
        <span  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2">
        {prop.tagtext}
      </span>
    )
}