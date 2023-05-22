import IconHandler from '@/components/assets/IconHandler'

export default function Home() {
  return (
    <>
      <div className="relative mx-auto flex max-h-[80vh] w-[90vw] items-center justify-center border-4 border-double border-blue-400 p-10">
        <div className="text-center">
          <span className="font-bold dark:text-white sm:text-2xl">
            Find out where are we located on the globe
          </span>
          <IconHandler iconName="featureIcon" />
        </div>
      </div>
    </>
  )
}
