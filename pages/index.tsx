import FeatureIcon from '@/components/assets/FeatureIcon'
import IconHandler from '@/components/assets/IconHandler'

export default function Home() {
  return (
    <>
      <div className="border-indigo-600mx-auto relative flex max-h-[50rem] items-center justify-center border-4 border-double p-10">
        <div className="text-center">
          <span className="text-2xl font-bold">
            Find out where we are on the globe
          </span>
          <IconHandler iconName="featureIcon" />
        </div>
      </div>
    </>
  )
}
