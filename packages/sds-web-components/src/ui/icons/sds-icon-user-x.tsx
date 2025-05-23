import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-user-x',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconUserX {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_16079)">
          <path
            d="M10.6666 14V12.6667C10.6666 11.9594 10.3857 11.2811 9.88558 10.781C9.38548 10.281 8.7072 10 7.99996 10H3.33329C2.62605 10 1.94777 10.281 1.44767 10.781C0.947578 11.2811 0.666626 11.9594 0.666626 12.6667V14M12 5.33333L15.3333 8.66667M15.3333 5.33333L12 8.66667M8.33329 4.66667C8.33329 6.13943 7.13939 7.33333 5.66663 7.33333C4.19387 7.33333 2.99996 6.13943 2.99996 4.66667C2.99996 3.19391 4.19387 2 5.66663 2C7.13939 2 8.33329 3.19391 8.33329 4.66667Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_16079">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
