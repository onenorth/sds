import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-twitter',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconTwitter {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16059)">
          <path
            d="M15.3333 2.00011C14.6949 2.45043 13.988 2.79485 13.24 3.02011C12.8385 2.55845 12.3048 2.23124 11.7113 2.08273C11.1178 1.93422 10.493 1.97158 9.92135 2.18975C9.34974 2.40792 8.85892 2.79638 8.51528 3.30259C8.17164 3.8088 7.99176 4.40834 7.99996 5.02011V5.68678C6.82838 5.71716 5.66747 5.45732 4.62063 4.93041C3.57379 4.4035 2.6735 3.62587 1.99996 2.66678C1.99996 2.66678 -0.666707 8.66678 5.33329 11.3334C3.96031 12.2654 2.32473 12.7327 0.666626 12.6668C6.66663 16.0001 14 12.6668 14 5.00011C13.9993 4.81441 13.9815 4.62917 13.9466 4.44678C14.627 3.77577 15.1072 2.92859 15.3333 2.00011Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16059">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
