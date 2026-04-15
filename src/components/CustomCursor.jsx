function CustomCursor({ cursorRef, dotRef }) {
  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <span className="custom-cursor__label cursor-label" />
      </div>
      <div ref={dotRef} className="custom-cursor__dot" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
