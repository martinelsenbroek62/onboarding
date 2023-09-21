import Slider from "./slider/Slider";

const media = [
  {
    author: "Mary L",
    title: "33, Newly Wed",
    description:
      "I have been blessed to work with Do. The organization skills of never cease to amaze me. Do makes everything flow seamlessly. Do always makes sure our schedule is set to go, basically all I have to do is show up, day of. Having Do complete all the behind-the-scenes work is really a game changer for me and my business. I would be lost in the wedding world without Do helping me along the way!",
    image:
      "https://do.mintleafmarketing.com/assets/bee70a63-121e-4e1a-84fd-d61f8fc44c63?format=webp&width=300",
  },
  {
    author: "Lily K",
    title: "33, Newly Wed",
    description:
      "When working with Do for your wedding you do not just get a hairstylist, you’re guaranteeing your bridal beauty business to be exceptional. The organization, professionalism, and timeliness sets Do apart. They take care of all of the scheduling so that you can sit back and enjoy your big day. At Do, they have a love of everything bridal and it shows through their dedication to their clients. Do goes above and beyond and is always available and helpful when you need them. If you want to feel less stressed and have more time doing what you love-  Do is for you!",
    image:
      "https://do.mintleafmarketing.com/assets/743f93db-20a1-4573-936c-52a4602e2744?format=webp&width=300",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-[48px] text-center italic font-extralight leading-[56px] -tracking-[0.96px]  text-azure-600 font-note tablet:mb-24">
        Testimonials
      </h2>
      <div className="w-full flex flex-col desktop:flex-row rounded-[32px] h-full gap-6">
        <Slider media={media} />
      </div>
    </section>
  );
}
