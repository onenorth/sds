import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-inbox',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconInbox {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M14.6668 8.00002H10.6668L9.3335 10H6.66683L5.3335 8.00002H1.3335M14.6668 8.00002V12C14.6668 12.3536 14.5264 12.6928 14.2763 12.9428C14.0263 13.1929 13.6871 13.3334 13.3335 13.3334H2.66683C2.31321 13.3334 1.97407 13.1929 1.72402 12.9428C1.47397 12.6928 1.3335 12.3536 1.3335 12V8.00002M14.6668 8.00002L12.3668 3.40669C12.2564 3.18455 12.0863 2.9976 11.8755 2.86687C11.6647 2.73615 11.4216 2.66682 11.1735 2.66669H4.82683C4.57877 2.66682 4.33567 2.73615 4.12486 2.86687C3.91405 2.9976 3.74388 3.18455 3.6335 3.40669L1.3335 8.00002"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
