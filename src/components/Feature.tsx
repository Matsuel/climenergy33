import { SERVICES } from '@/constants/services'

const Features = () => {
    return (
        <div className="bg-transparent w-full">
            <div className="mx-auto max-w-7xl px-2 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {SERVICES.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                                        {feature.icon}
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Features