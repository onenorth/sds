import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-file-text',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconFileText {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M9.33317 1.33333H3.99984C3.64622 1.33333 3.30708 1.4738 3.05703 1.72385C2.80698 1.9739 2.6665 2.31304 2.6665 2.66666V13.3333C2.6665 13.687 2.80698 14.0261 3.05703 14.2761C3.30708 14.5262 3.64622 14.6667 3.99984 14.6667H11.9998C12.3535 14.6667 12.6926 14.5262 12.9426 14.2761C13.1927 14.0261 13.3332 13.687 13.3332 13.3333V5.33333M9.33317 1.33333L13.3332 5.33333M9.33317 1.33333L9.33317 5.33333H13.3332M10.6665 8.66666H5.33317M10.6665 11.3333H5.33317M6.6665 5.99999H5.33317"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
