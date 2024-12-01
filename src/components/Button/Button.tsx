import { forwardRef } from 'react';
import { Button as _Button, type ButtonProps as _ButtonProps } from 'react-aria-components';
import { cva, type VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  [
    'py-2 px-4 rounded-md',
    /**Focus Visible */
    'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
    /** Resets */
    'focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary-bold text-inverse hover:bg-primary-boldHover data-[pressed]:bg-primary-boldPressed',
        outline:
          'bg-transparent border-2 border-brand-accent text-brand hover:bg-primary-hover data-[pressed]:bg-primary-pressed',
        disabled: 'bg-disabled text-disabled cursor-not-allowed',
      },
    },
  },
);

export interface ButtonProps extends VariantProps<typeof ButtonStyles>, _ButtonProps {
  /**
   * The click event handler.
   */
  onClick?: _ButtonProps['onPress'];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', ...rest }, ref) => (
  <_Button
    ref={ref}
    {...rest}
    className={ButtonStyles({ variant })}
    isDisabled={variant === 'disabled'}
  />
));

Button.displayName = 'Button';
