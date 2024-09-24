import React from 'react'

    interface TextProps {
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'primary' | 'secondary'
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small'
    fontFamily?: 'playfair' | 'poppins'
    }

    const Text: React.FC<TextProps> = ({
    children,
    className = '',
    variant = 'default',
    size = 'p',
    fontFamily = 'poppins',
    }) => {
    const variantClasses = {
        default: 'text-white',
        primary: 'text-[#FBD784]', 
        secondary: 'text-[#858e93]',
    }

    const sizeClasses = {
        h1: 'text-[180px] leading-[180px]',
        h2: 'text-[88px] leading-[100px]',
        h3: 'text-[64px] leading-[64px]',
        h4: 'text-[24px] leading-[31px]',
        h5: 'text-[22px] leading-[29px]',
        h6: 'text-[20px] leading-[26px]',
        p: 'text-[18px] leading-[25px]',
        small:
        'text-[15px] leading-[20px]',
    }

    const fontFamilyClasses = {
        playfair: 'var(--font-playfair)',
        poppins: 'var(--font-poppins)',
    }

    const combinedClasses = [
        variantClasses[variant],
        sizeClasses[size],
        fontFamilyClasses[fontFamily],
        className
    ].filter(Boolean).join(' ')

    const Component = size as keyof JSX.IntrinsicElements

    return <Component className={combinedClasses}>{children}</Component>
    }

    export default Text
