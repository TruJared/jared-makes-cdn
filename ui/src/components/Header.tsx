export interface Props {
  heading: string;
  introduction: string;
}

export default function header(props: Props) {
  const { heading, introduction } = props;
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <span className="flex justify-start items-center">
          <h2 className="inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{heading}</h2>
          </span>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {introduction}
          </p>
        </div>
      </div>
    </div>
  )
}
