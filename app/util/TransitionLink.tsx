"use client"
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}

const TransitionLink = ({children, href,...props}:TransitionLinkProps) => {
  return (
  <Link href={href} {...props}>
    {children}
    </Link>
    );
};

export default TransitionLink