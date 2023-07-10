function SquareIcons({ image, text }: { image: string, text: string}) {
  return (
    <div className="square">
        <img src={ image } alt={ text } />
        <p>{ text }</p>
    </div>
  )
}

export default SquareIcons