import BodySection from './BodySection';
import './BodySection.css';
import React from 'react';

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        )
    }
}

export default BodySectionWithMarginBottom