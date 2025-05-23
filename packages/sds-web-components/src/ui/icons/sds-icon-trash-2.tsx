import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-trash-2',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTrash2 {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M2 3.99992H3.33333M3.33333 3.99992H14M3.33333 3.99992L3.33333 13.3333C3.33333 13.6869 3.47381 14.026 3.72386 14.2761C3.97391 14.5261 4.31304 14.6666 4.66667 14.6666H11.3333C11.687 14.6666 12.0261 14.5261 12.2761 14.2761C12.5262 14.026 12.6667 13.6869 12.6667 13.3333V3.99992M5.33333 3.99992V2.66659C5.33333 2.31296 5.47381 1.97382 5.72386 1.72378C5.97391 1.47373 6.31304 1.33325 6.66667 1.33325H9.33333C9.68696 1.33325 10.0261 1.47373 10.2761 1.72378C10.5262 1.97382 10.6667 2.31296 10.6667 2.66659V3.99992M6.66667 7.33325V11.3333M9.33333 7.33325V11.3333"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
