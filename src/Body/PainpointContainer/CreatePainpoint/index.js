import React from 'react'
import CategoryList from '../../../Category/CategoryList'
import { Modal } from 'semantic-ui-react'

class CreatePainpoint extends React.Component {
  constructor(){
    super()

    this.state = {
      head: '',
      body: '',
      attachment: '',
      categories: [],
      categoriesSelected: [],
      categoryModalOpen: false
    }
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = async () => {
    try {
      const categoriesResponse = await fetch('http://localhost:8000/category/', {
        method: 'GET',
        credentials: 'include'
      })

      if (categoriesResponse.status !== 200) {
        throw Error('categoriesResponse is not working')
      }

      const allCategories = await categoriesResponse.json()

      this.setState({
        categories: allCategories.data
      })
    } catch (err) {
      console.log(err);
    }
  }


  selectCategory = async (category, e) => {
    e.preventDefault()

    let selectedCats = this.state.categoriesSelected

    if (selectedCats.length === 0) {
      this.setState({
        categoriesSelected: [category]
      })

      return
    }

    if (selectedCats.length > 0) {
      for (let i = 0; i < selectedCats.length; i++) {
        if (category.id === selectedCats[i].id) {
          let newCategories = selectedCats.filter(cats => cats.id !== category.id)

          this.setState({
            categoriesSelected: newCategories
          })

          return
        }
      }

      if (selectedCats.length < 3) {
        this.setState({
          categoriesSelected: [...selectedCats, category]
        })

        return
      }
    }
  }

  closeAddCatModal = () => {
    this.setState({
      categoryModalOpen: false
    })
  }

  showAddCatModal = (e) => {
    e.preventDefault()

    this.setState({
      categoryModalOpen: true
    })
  }

  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.addPainpoint({
      'head': this.state.head,
      'body': this.state.body,
      'attachment': this.state.attachment
    }, this.state.categoriesSelected)

    this.setState({
      head: '',
      body: '',
      attachment: '',
      categoriesSelected: []
    })
  }

  render() {
    return(
      <div className='ppCreateContainer'>
        <form className='ppCreateForm'>
          <input
            className='ppCreateFormInputTitle'
            autoComplete='off'
            name='head' 
            type="text"
            placeholder='Enter painpoint title here...'
            onChange={this.handleChange}
            value={this.state.head}
          />
          <textarea
            name='body'
            className='ppCreateFormInputBody' 
            type="text"
            placeholder='BODY'
            onChange={this.handleChange}
            value={this.state.body}
          />
          <div className='ppCreateFormBottom'>
            <input 
              className='ppCreateFormInputFile'
              name='attachment'
              type="text"
              placeholder='attach file'
              onChange={this.handleChange}
              value={this.state.attachment}
            />
            <Modal 
              trigger={
                <div className='chooseTagGroup'>
                  <button
                    onClick={this.showAddCatModal}
                    className='ppCreateTagButton' 
                  >Choose tag(s)</button>
                  <div className='labelForTags'>{this.state.categoriesSelected.length}</div>
                </div>
              }
              open={this.state.categoryModalOpen}
              onClose={this.closeAddCatModal}
              basic
              closeIcon
            >
              <Modal.Header>Choose your category/categories</Modal.Header>
              <CategoryList
                selectCategory={this.selectCategory}
                categories={this.state.categories}
                closeAddCatModal={this.closeAddCatModal}
                categoriesSelected={this.state.categoriesSelected}
                selectingForPainpoint={true}
              />
            </Modal>
            <button 
              onClick={this.handleSubmit}
              className='ppCreateSubmit'
              style={{backgroundColor: '#62806A'}}
            >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreatePainpoint
