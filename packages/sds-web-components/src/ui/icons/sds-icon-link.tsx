import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-link',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconLink {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15837)">
          <path
            d="M6.6668 8.66666C6.9531 9.04942 7.31837 9.36612 7.73783 9.59529C8.15729 9.82446 8.62114 9.96074 9.0979 9.99489C9.57466 10.029 10.0532 9.96024 10.501 9.79318C10.9489 9.62613 11.3555 9.36471 11.6935 9.02666L13.6935 7.02666C14.3007 6.39799 14.6366 5.55598 14.629 4.68199C14.6215 3.808 14.2709 2.97196 13.6529 2.35394C13.0348 1.73591 12.1988 1.38535 11.3248 1.37775C10.4508 1.37016 9.60881 1.70614 8.98013 2.31333L7.83347 3.45333M9.33347 7.33333C9.04716 6.95058 8.68189 6.63388 8.26243 6.4047C7.84297 6.17553 7.37913 6.03925 6.90237 6.00511C6.4256 5.97096 5.94708 6.03975 5.49924 6.20681C5.0514 6.37387 4.64472 6.63528 4.3068 6.97333L2.3068 8.97333C1.69961 9.602 1.36363 10.444 1.37122 11.318C1.37881 12.192 1.72938 13.028 2.3474 13.6461C2.96543 14.2641 3.80147 14.6146 4.67546 14.6222C5.54945 14.6298 6.39146 14.2939 7.02013 13.6867L8.16013 12.5467"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15837">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
