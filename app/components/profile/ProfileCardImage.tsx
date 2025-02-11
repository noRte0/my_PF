type ProfileImageProps = {
    src: string
    alt: string
    width: number
    height: number
  }
  
  export function ProfileImage({ src, alt, width, height }: ProfileImageProps) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover object-center"
        style={{
          aspectRatio: `${width} / ${height}`,
        }}
        loading="eager"
      />
    )
  }
  