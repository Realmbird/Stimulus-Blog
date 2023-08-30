class HellosController < ApplicationController
  def index
    @hellos = Hello.all
  end
  def new
    @hello = Hello.new
  end
  def create
    @hello = Hello.new(hello_params)
    respond_to do |format|
      if @hello.save
        format.turbo_stream
      else 
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end
  
  private

  def hello_params
    params.require(:hello).permit(:text)
  end
end
