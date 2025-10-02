// PlansList.tsx
interface PlansListProps {
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref?: string;
  name: string;
}

export default function PlansList({
  price,
  description,
  features,
  buttonText,
  buttonHref,
  name,
}: PlansListProps) {
  const isEnterprise = name.toLowerCase() === "enterprise";
  const buttonUrl =
    buttonHref ||
    (isEnterprise ? "mailto:info@next-together.com" : "/demo-form");

  return (
    <div className="flex flex-col bg-white text-black items-center justify-between p-8 w-90 rounded-2xl">
      <div className="mb-4">
        <div className="self-start">
          <h1 className="uppercase text-3xl">{name}</h1>
          <h1 className="text-2xl mt-2 text-[#a2a40d]">
            {price === 0 ? "Su Richiesta" : `€ ${price}/mo`}
          </h1>
        </div>
        <hr className="border-t w-full border-black my-2" />
        <div className="">
          <div className="">
            <p className="mb-2">{description}</p>
            <ul className="list-disc list-inside space-y-1 px-4">
              {features.map((feature, idx) => (
                <li key={idx} className="pl-5.5 -indent-5.5">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <a
        className="bg-black text-white rounded-2xl w-full py-4 text-center"
        href={buttonUrl}
      >
        {price === 0 ? "Richiedi Preventivo" : buttonText}
      </a>
    </div>
  );
}
