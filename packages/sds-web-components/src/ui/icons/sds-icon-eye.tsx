import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-eye',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconEye {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15751)">
          <path
            d="M0.666687 8C0.666687 8 3.33335 2.66667 8.00002 2.66667C12.6667 2.66667 15.3334 8 15.3334 8C15.3334 8 12.6667 13.3333 8.00002 13.3333C3.33335 13.3333 0.666687 8 0.666687 8Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00002 10C9.10459 10 10 9.10457 10 8C10 6.89544 9.10459 6 8.00002 6C6.89545 6 6.00002 6.89544 6.00002 8C6.00002 9.10457 6.89545 10 8.00002 10Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15751">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
