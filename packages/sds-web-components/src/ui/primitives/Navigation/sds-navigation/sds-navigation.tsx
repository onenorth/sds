import { Component, Host, h, Prop } from '@stencil/core';
import clsx from 'clsx';

export type NavigationDirection = 'column' | 'row';

@Component({
  tag: 'sds-navigation',
  styleUrl: 'sds-navigation.scss',
  shadow: true,
})
export class SdsNavigation {
  /**
   * Flex direction of the content
   */
  @Prop()
  direction: NavigationDirection = 'row';

  render() {
    const classNames = clsx('navigation', `navigation-direction-${this.direction}`);

    return (
      <Host role="navigation" class={classNames}>
        <slot></slot>
      </Host>
    );
  }
}
