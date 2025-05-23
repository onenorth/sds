import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-share',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconShare {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M2.66675 7.99992V13.3333C2.66675 13.6869 2.80722 14.026 3.05727 14.2761C3.30732 14.5261 3.64646 14.6666 4.00008 14.6666H12.0001C12.3537 14.6666 12.6928 14.5261 12.9429 14.2761C13.1929 14.026 13.3334 13.6869 13.3334 13.3333V7.99992M10.6667 3.99992L8.00008 1.33325M8.00008 1.33325L5.33341 3.99992M8.00008 1.33325L8.00008 9.99992"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
