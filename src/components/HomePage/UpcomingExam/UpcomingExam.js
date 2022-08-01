import React from 'react';
import './UpcomingExam.css';

const UpcomingExam = () => {
    return(
        <div className="container upcoming-exam-container">
            <div className='row'>
                <div className="col-md-3 upcoming-exam-headings">
                    <p className='upcoming-exam-title'>Upcoming Examinations</p>
                    <p className='upcoming-exam-description'>Enquire about the examination & register for the exams</p>
                </div>
                <div className="col-md-3 recent__exam">
                    <div><img className='event-img' src="/event.svg" alt="event" /></div>
                    <div className="recent__exam_desc">
                        <p className='recent-exam-title'>02th October 2014</p>
                        <p className='exam-level'>Level 1 exam</p>
                    </div>
                </div>
                <div className="col-md-3 future__exam">
                    <div><img className='event-img' src="/event.svg" alt="event" /></div>
                    <div className="future__exam_desc">
                        <p className='future-exam-title' style={{marginBottom:'0rem'}}>Nov-Dec 2016</p>
                        <p className='future_exam-level' style={{marginBottom:'0rem'}}>Level 2</p>
                        <p className='future_exam-level' style={{marginBottom:'0rem'}}>Lorem Ipsum</p>
                        <p className='future_exam-level' style={{marginBottom:'0rem'}}>Lorem Ipsum</p>
                    </div>
                </div>
                <div className="col-md-3 ongoing__exam">
                    <div><img className='event-img' src="/event.svg" alt="event" /></div>
                    <div className="ongoing__exam_desc">
                        <p className='ongoing-exam-title'>Ongoing this year</p>
                        <p className='exam-level'>Level 3&#40;Grad&#41;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingExam;
