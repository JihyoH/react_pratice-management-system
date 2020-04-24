import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



class CustomerUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            userName: '',
            birthday: '',
            gender: '',
            job: ''
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
    }
        
    handleClickOpen() {
        this.setState({
            open: true
        });
    }        

    handleClose() {
        this.setState({
            open: false
        })
    }

    updateCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, { method: 'UPDATE' });
        this.props.stateRefresh();
    }

    render() {
        return (
        <div>
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                수정
            </Button>

            <Dialog onClose={this.handleClose} open={this.state.open}>
                <DialogTitle onClose={this.handleClose}>
                    수정 경고
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        선택한 고객 정보가 수정됩니다.
                    </Typography>
                    <TextField label="이름" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                    <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                    <TextField label="성별" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
                    <TextField label="직업" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>

                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={(e) => {this.updateCustomer(this.props.id)}}>수정</Button>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
        )
    }
}

export default CustomerUpdate;