import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-cloud-rain',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconCloudRain {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15673)">
          <path
            d="M10.6665 8.66668V14M5.33319 8.66668V14M7.99986 10V15.3333M13.3332 11.0533C14.034 10.7464 14.6079 10.2077 14.9586 9.52771C15.3092 8.84769 15.4153 8.06775 15.2589 7.3188C15.1026 6.56985 14.6933 5.89749 14.0999 5.41457C13.5065 4.93165 12.765 4.66758 11.9999 4.66668H11.1599C10.9485 3.84836 10.5458 3.09198 9.98473 2.45988C9.4237 1.82778 8.72048 1.33806 7.93304 1.03109C7.14559 0.724123 6.29646 0.60869 5.45565 0.694308C4.61483 0.779926 3.8064 1.06414 3.09699 1.52353C2.38758 1.98293 1.7975 2.60433 1.3754 3.33654C0.95329 4.06875 0.711241 4.89079 0.669201 5.73491C0.62716 6.57903 0.786332 7.42106 1.1336 8.19158C1.48086 8.96211 2.00627 9.63907 2.66653 10.1667"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15673">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
