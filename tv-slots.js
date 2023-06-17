import { tv } from 'tailwind-variants';

export const avatar = tv({
  slots: {
    base: 'relative flex shrink-0 overflow-hidden rounded-full',
    image: 'aspect-square h-full w-full',
    fallback:
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
  },

  variants: {
    withBorder: {
      true: {
        image: 'border-1.5 border-white',
      },
    },

    size: {
      xs: {
        base: 'h-6 w-6',
        fallback: 'text-xs',
      },
      sm: {
        base: 'h-8 w-8',
        fallback: 'text-sm',
      },
      md: {
        base: 'h-10 w-10',
        fallback: 'text-base',
      },
      lg: {
        base: 'h-12 w-12',
        fallback: 'text-lg',
      },
      xl: {
        base: 'h-14 w-14',
        fallback: 'text-xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    withBorder: false,
  },

  compoundVariants: [
    {
      size: ['xs', 'sm'],
      class: 'ring-1',
    },
    {
      size: ['md', 'lg', 'xl', '2xl'],
      class: 'ring-2',
    },
  ],
});
