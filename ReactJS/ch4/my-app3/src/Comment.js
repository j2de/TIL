import React from 'react';

const styles = {
    root: {
        width: '20%',
        margin: 'auto',
        marginTop: 16,
        padding: 16,
        textAlign: 'left',
        backgroundColor: 'white',
        borderRadius: 16,
    },
    imageContainer: {
        display: 'inline-block',
        width: '50',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    commentContainer: {
        display: 'inline-block',
        marginLeft: 16,
        textAlign: 'left',
        verticalAlign: 'top',
    },
    nameText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
    },
    contentText: {
        color: 'black',
        fontSize: 16,
    }
} // style을 분리해서 작업하는 것이 좋다. 

class Comment extends React.Component { // Class Component
    render() {
        return (
            <div style={styles.root}>
                <div style={styles.imageContainer}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                    style={styles.image}/>
                </div>
                <div style={styles.commentContainer}>
                    <div style={styles.nameText}>
                        {this.props.name}
                    </div>
                    <span style={styles.contentText}>
                        {this.props.content}
                    </span>
                </div>
            </div>
        ) // comment가 props를 받도록 수정 
    }
}

export default Comment; // 만든 commponent 내보내기 