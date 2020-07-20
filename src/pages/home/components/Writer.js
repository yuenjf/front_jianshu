import React, {PureComponent} from 'react';
import {
    WriterWrapper,
    WriterTitle,
    WriterSwitch,
    WriterItem
} from '../style';

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch>
                        换一换
                    </WriterSwitch>
                </WriterTitle>
                <WriterItem>
                    <div className="avatar"></div>
                    <div className="name">xxx</div>
                </WriterItem>
            </WriterWrapper>
        )
    }
}

export default Writer;