import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-image',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconImage {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14ZM3.33333 14L10.6667 6.66667L14 10M6.66667 5.66667C6.66667 6.21895 6.21895 6.66667 5.66667 6.66667C5.11438 6.66667 4.66667 6.21895 4.66667 5.66667C4.66667 5.11438 5.11438 4.66667 5.66667 4.66667C6.21895 4.66667 6.66667 5.11438 6.66667 5.66667Z"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
