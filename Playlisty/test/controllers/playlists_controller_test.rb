require 'test_helper'

class PlaylistsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get playlists_create_url
    assert_response :success
  end

  test "should get update" do
    get playlists_update_url
    assert_response :success
  end

  test "should get destory" do
    get playlists_destory_url
    assert_response :success
  end

  test "should get show" do
    get playlists_show_url
    assert_response :success
  end

  test "should get edit" do
    get playlists_edit_url
    assert_response :success
  end

end
