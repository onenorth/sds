import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-monitor',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconMonitor {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M5.33325 14H10.6666M7.99992 11.3333V14M2.66659 2H13.3333C14.0696 2 14.6666 2.59695 14.6666 3.33333V10C14.6666 10.7364 14.0696 11.3333 13.3333 11.3333H2.66659C1.93021 11.3333 1.33325 10.7364 1.33325 10V3.33333C1.33325 2.59695 1.93021 2 2.66659 2Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
