import React , {Component} from 'react'
class Alert extends Component{
  render(){
    return (
    <div style={{ display: (this.props.open) ? 'block' : 'none' }} 
    className="newmodal_dialog">
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: ' calc(100% - 32px)', alignItems: 'center',marginTop:'32px',marginBottom:'32px',overflow:'hidden' }}>
<div style={{
                        display: 'block',
                        backgroundColor: '#fff',
                        width:  '80%' ,
                        height: this.props.height ? this.props.height : null,
                        overflow: 'auto',
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom:32,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        {this.props.children}
                    </div>

                
</div>
      </div>)
  }
}
export default Alert