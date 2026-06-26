import React from 'react'

const card = (props) => {
    return (
        <>
            <div className='card'>
                <div className="first">
                    <img src={props.logoUrl} />
                    <button>
                        {props.saved ? 'Saved ' : 'Save '}
                        <i className={props.saved ? "fa fa-bookmark" : "fa fa-bookmark-o"}></i>
                    </button>
                </div>
                <div className="mid">
                    <h3>{props.company} <span>{props.postedAgo}</span></h3>
                    <h2>{props.jobTitle}</h2>
                    <div className='btn-lik'>
                        {props.jobType.map((type) => (
                            <h4 key={type}>{type}</h4>
                        ))}
                    </div>

                </div>
                <div className="end">
                    <div>
                        <h3>{props.payment}</h3>
                        <h4>{props.location}</h4></div>
                    <button className='apply'>Apply Now</button>
                </div>

            </div>
        </>
    )
}

export default card