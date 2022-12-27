class ContactsController < ApplicationController
    # layout false

    def index
        @contacts = Contact.all
    end

    def new
        @contact = Contact.new
    end

    def edit
        @contact = Contact.find_by_id(params[:id])
    end

    def create
        @contact = Contact.new(params_contact)
        if @contact.save
            @contact = Contact.new
        end
        respond_to do |format|
            format.html{ return redirect_to root_path}
            format.js
        end
    end

    def update
        @contact = Contact.find_by_id(params[:id])
        @contact.update_attributes(params_contact)
        if @contact.save
            redirect_to contacts_path
        else
            render 'edit'
        end
    end

    def destroy
        @contact = Contact.find_by_id(params[:id])

        if @contact.destroy
            redirect_to contacts_path
        end
    end

    def show
    end

    private

    def params_contact
        params.require(:contact).permit!
    end
end
