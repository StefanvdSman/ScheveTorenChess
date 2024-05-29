import React from 'react';
import { Footer as FlowbiteFooter } from 'flowbite-react';
import Logo from './Logo';
export default function Footer() {
  return (
    <FlowbiteFooter container className='border-t-8 border-teal-500'>
      <div>
        <div>
          <div>
            <Logo></Logo>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
