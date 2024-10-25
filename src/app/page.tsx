import MaxWidthWrapper from "@/components/Max-Width-Wrapper";
import MapkeyToggle from "@/components/Mapkey-Toggle";
import Image from "next/image";
import LocationInput from "@/components/Location-Input";
const Home = () => {
  return (
    <section className="flex flex-col justify-start items-start h-[100vh] w-full">
      <MaxWidthWrapper>
        {/* Parent container for MapToggle */}
        <div className="w-full h-full md:col-span-4 col-span-2 rounded-md space-y-4 md:space-y-8 lg:space-y-12 grid p-4 lg:p-8">
          <h2 className="text-primary font-bold text-xl md:display-none lg:text-3xl md:text-2xl ">
            Water Safety Map
          </h2>
          {/* Align MapToggle to the start */}

          {/* Center the Image */}

          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/map.png"
              alt="Map"
              width={800}
              height={600}
              className="object-cover rounded-md border-solid border-border shadow-xl"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {" "}
            <div className="col-span-2 col-start-1">
              <p className="text-xl font-bold text-primary">Map Key</p>
              <MapkeyToggle />
            </div>
            <div className="col-span-2 col-start-1 md:col-start-3 ">
              <p className="text-xl font-bold text-primary row-start-1 md:row-start-2">
                Clean drinking water is a human right not a privilege.
              </p>
              <p className="text-md text-foreground">
                This map aims to provide a quick and accessible way to check the
                status of drinking water data by area.
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-xl font-bold text-primary">
                Check your water status now
              </p>
              <p className="text-md text-foreground">
                Enter your zip code, state (short 2 digit i.e. &apos;NY&apos;),
                and City below to check the status of your drinking water.
              </p>
              <div className="w-full py-4">
                <LocationInput />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Home;
