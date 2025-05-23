import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-user-minus',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconUserMinus {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16075)">
          <path
            d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88564 10.781C9.38554 10.281 8.70726 10 8.00002 10H3.33335C2.62611 10 1.94783 10.281 1.44774 10.781C0.947639 11.2811 0.666687 11.9594 0.666687 12.6667V14M15.3334 7.33333H11.3334M8.33335 4.66667C8.33335 6.13943 7.13945 7.33333 5.66669 7.33333C4.19393 7.33333 3.00002 6.13943 3.00002 4.66667C3.00002 3.19391 4.19393 2 5.66669 2C7.13945 2 8.33335 3.19391 8.33335 4.66667Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16075">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
