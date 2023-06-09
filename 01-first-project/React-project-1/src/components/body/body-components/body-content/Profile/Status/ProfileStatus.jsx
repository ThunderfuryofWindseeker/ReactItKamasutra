import React from 'react';
import style from './ProfileStatus.module.css';





class ProfileStatus extends React.PureComponent {
    state = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode =  () => {
        this.setState({ editMode: true })
    }
    deactivatedEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e)=> {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    };
    componentDidUpdate(prevProps){
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        };
    }

    render() {
        console.log('render')
        return (
            <div>
                {!this.state.editMode ? 
                <div className={style.button}><button onClick={this.activatedEditMode}>{this.state.status ? this.state.status : `Тут статус`}</button></div> : <div className={style.input}><input  autoFocus={true} onBlur={this.deactivatedEditMode} onChange={this.onStatusChange} value={this.state.status ? this.state.status : `Тут статус`} /></div>}
            </div>
        )
    }
}
export default ProfileStatus;
