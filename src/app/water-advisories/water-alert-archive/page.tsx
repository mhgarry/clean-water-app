import MaxWidthWrapper from "@/components/Max-Width-Wrapper";
import MapkeyToggle from "@/components/Mapkey-Toggle";
import Image from "next/image";
import LocationInput from "@/components/Location-Input";
const Home = () => {
  return (
    <section className="flex flex-col justify-start items-start h-[100vh] w-full">
      <MaxWidthWrapper>
        {/* Parent container for MapToggle */}
        <div className="w-full h-full md:col-span-4 col-span-2 rounded-md space-y-4 md:space-y-4 lg:space-y-8 grid p-4 lg:p-8">
          <h2 className="text-primary font-bold text-xl md:display-none lg:text-3xl md:text-2xl ">
            Water Quality Map
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
          <div className="grid grid-cols-2 md:grid-cols-5 space-y-8 md:space-y-4">
            {" "}
            <div className="md:col-span-3  col-span-1 ">
              <p className="text-xl font-bold text-primary row-start-1 md:row-start-2">
                Clean drinking water is a human right.
              </p>
              <p className="text-md text-foreground">
                This map aims to provide a quick and accessible way to check the
                status of drinking water data by area.
              </p>
            </div>
            <div className="col-span-2 col-start-1 md:col-start-4">
              <p className="text-sm font-bold text-primary mb-1">Map Key</p>
              <MapkeyToggle />
            </div>
            <div className="col-span-5">
              <p className="text-xl font-bold text-primary">
                Check your water status now
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
