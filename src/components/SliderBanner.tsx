import * as HoverCard from '@radix-ui/react-hover-card';

interface SliderBannerProps {
  bannerUrl: string;
  title: string;
}

export function SliderBanner(props: SliderBannerProps) {
  return (
    <HoverCard.Root openDelay={200}>
      <HoverCard.Trigger>
        <div className='w-full absolute top-0 bottom-0 left-0 flex items-center justify-center sm:text-sm hover:bg-slider-gradient text-sectionsColor'>
          <strong className='font-bold block'>{props.title}</strong>
        </div>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content sideOffset={40} className='w-40 border border-titleColor rounded-lg'>
          <img src={props.bannerUrl} className="block rounded-lg" />

          <HoverCard.Arrow className="fill-titleColor" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}