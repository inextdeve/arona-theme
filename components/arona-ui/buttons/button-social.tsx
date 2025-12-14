import { Button } from "@/components/ui/button";

const ButtonSocialIcons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button variant="outline" size="icon">
        <img
          src="/assets/images/social-icons/google-icon.webp"
          alt="Google Icon"
          className="size-5"
        />
      </Button>
      <Button variant="outline" size="icon">
        <img
          src="/assets/images/social-icons/twitter-icon.webp"
          alt="X Icon"
          className="size-5 dark:invert"
        />
      </Button>
      <Button variant="outline" size="icon">
        <img
          src="/assets/images/social-icons/facebook-icon.webp"
          alt="Facebook Icon"
          className="size-5"
        />
      </Button>
      <Button variant="outline" size="icon">
        <img
          src="/assets/images/social-icons/google-icon.webp"
          alt="GitHub Icon"
          className="size-5 dark:invert"
        />
      </Button>
    </div>
  );
};

export default ButtonSocialIcons;
