import Card from '../card/Card';

function CardContainer ({ items }) {
    return (
        <div className="row">
            <div className='cards' style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(90px, 1fr)", gridGap: 10 }}>
              {
                items.map((movie, index) => {
                  return (
                    <Card imgUrl={movie['poster-image']} title={movie['name']} id={index} />
                  )
                })
              }
              </div>
          </div>
    )
}

export default CardContainer;