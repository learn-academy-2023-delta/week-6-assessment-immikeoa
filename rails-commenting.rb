# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags

# FILE: app/controller/blog_posts_controller.rb

# ---1)
// BlogPostsController inherets from the ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    // we set a param named posts thats going to equall all the BlogPost
    @posts = BlogPost.all
  end

  # ---3)
  //this creates the show method to find the selected post to be displayed
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  // the new method cretes a new BlogPost
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    //we create a param that equals a name BlogPost beign creted and takes in the required params from the database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    // create a param named post that equals a BlogPost found by its id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    // we take he post param and use update method to update the required params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      // we give the user a lik to go bak to the post using a path
      redirect_to blog_posts_path
    end
  end

  # ---9)
  // we use the private method to give the controller some separation of concerns keep the database secured
  private
  def blog_post_params
    # ---10)
    // we set up the required params that the user needs to provide for them to be able to create, edit and or update a blog post
    params.require(:blog_post).permit(:title, :content)
  end
end
