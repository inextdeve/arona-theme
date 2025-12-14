import Card3d from "@/components/arona-ui/animated-cards/card-3d";
import CardGradient from "@/components/arona-ui/animated-cards/card-gradient";
import CardProfileHover from "@/components/arona-ui/animated-cards/card-gradient-glass";
import CardHover from "@/components/arona-ui/animated-cards/card-hover";
import CardPricing from "@/components/arona-ui/animated-cards/card-pricing";
import CardSocial from "@/components/arona-ui/animated-cards/card-social";
import CardSocial2 from "@/components/arona-ui/animated-cards/card-social-2";
import CardSpotlight from "@/components/arona-ui/animated-cards/card-spotlight";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-12 animated-cards">
      <div className="flex items-center justify-center">
        <Card3d />
      </div>
      <div className="flex items-center justify-center">
        <div className="grid gap-2">
          <CardSpotlight
            title="Hover for the Glow-Up"
            description="Glide your cursor here and watch magic unfold — an experience
            designed just for you."
          />
          <CardSpotlight
            title="Hover experience"
            description="Glide your cursor here and watch magic unfold — an experience
            designed just for you."
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CardGradient />
      </div>
      <div className="flex items-center justify-center">
        <CardProfileHover />
      </div>
      <div className="flex items-center justify-center">
        <CardPricing />
      </div>
      <div className="flex items-center justify-center">
        <CardHover />
      </div>
      <div className="flex items-center justify-center">
        <CardSocial />
      </div>
      <div className="flex items-center justify-center">
        <CardSocial2 />
      </div>
    </div>
  );
};

export default Page;
